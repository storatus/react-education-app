import React, {Component} from 'react';
import {
  Table,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Image,
  Form} from 'react-bootstrap';
import axios from 'axios'

import { uploadVideo, deleteVideo,watchVideo } from '../../../actions/courseActions';
import { connect } from 'react-redux';

import {setAuthToken} from './../../../helpers'

/**
 * CourseVideos React Class
 * @class CourseVideos
 */
class CourseVideos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      url: '',
      courseId: this.props.courseId,
      isDisabled: true,
      isDisabledDelete: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }


  componentWillReceiveProps(newProps) {
    if (newProps) {
        this.setState({
          isDisabled: false,
          isDisabledDelete: false,
          url: ''
        })
    }
}


  /*Check disabled state for button */
  handleInput(e){
    let url = e.target.value
    this.setState({
      url,
      isDisabled: url === '' ? true : false
    });
  }

  /** Check if video url is a youtube video url with regex - Regex taken from https://goo.gl/unbFN5 */
  checkUrlVideo(url){

    let urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    let result = url.match(urlRegex)
    if (result) {
      return result;
    }
    return false;
  }


  submitForm(e) {
    e.preventDefault();

    /*Get rid of whitespaces*/
    let url = this.state.url.replace(/\s+/g, '');
    let courseId = this.state.courseId

    /*Check valid youtube string*/
    let result = this.checkUrlVideo(url);
    if (result === false) {
        alert('Your string is not a valid youtube string')
        return;
    }

    /*Youtube id and key*/
    let youtubeId = result[1];
    let youtubeKey = 'AIzaSyALhXcz4s3rk1zdGpqqHHWw-QJYLNuf0vs'


    let checkRepeat = this.props.videos.findIndex(data => {
      return  data.youtubeId === youtubeId
    })


    if (checkRepeat > -1) {
      alert('The same youtube title is used already')
      return;
    }

    this.setState({isDisabled: true})
    setAuthToken(false)


    /*Call youtube API and get response */
    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${youtubeId}&key=${youtubeKey}&part=snippet`)
    .then(response => {

      /*Set token */
      let token = localStorage.getItem('jwtToken')
      setAuthToken(token)

      let title = response.data.items[0].snippet.title
      let thumbnail = response.data.items[0].snippet.thumbnails.default.url
      this.props.uploadVideo(url, courseId, title, youtubeId, thumbnail)



    }).catch(err => console.log(err))
  }

  /** watch video inside component*/
  watchVideo(videoObj){
    this.props.watchVideo(this.state.courseId, videoObj._id, videoObj.youtubeId)
  }

  /** delete video inside component*/
  deleteVideo(videoId){
    this.props.deleteVideo(this.state.courseId, videoId)
  }

  /** generate videos to display in tabular form*/
  generateVideos(videos){
    return videos.map((val,index) => {
        return (
        <tr key={val._id}>
          <td>
            <Image src={val.thumbnail} rounded />
          </td>
          <td>{val.title}</td>
          <td>{val.clicks.length}</td>
          <td className="align-middle">
              <Button onClick={(e) => this.watchVideo(val, e)} bsSize="xsmall" >Watch Video</Button>
          </td>

          {this.props.role === 1 && <td className="align-middle">
            <Button disabled={this.state.isDisabledDelete}  onClick={(e) => this.deleteVideo(val._id,e)} bsSize="xsmall" bsStyle="danger" >Delete File </Button>
          </td>}
        </tr>);
    })
  }

  render() {

    let videos = this.generateVideos(this.props.videos)
    let role = this.props.role


    return(
      <div>
      <Row>
        <Col md={6}>
          <h3> Course Videos </h3>
          {role === 1 &&    <Form encType="multipart/form-data" onSubmit={this.submitForm}>
            <FormGroup controlId="videoUrl">
              <Col sm={3} className="no-padding" componentClass={ControlLabel} >
                Youtube URL
              </Col>
              <Col sm={9}>
                <FormControl value={this.state.url} className="display-file-input" onChange={this.handleInput} type="text"  />
              </Col>
              <Col className="margin-up"sm={12}>
                <Button disabled={this.state.isDisabled}  bsStyle="success" type="submit" className="pull-right" >Upload Video <span className="glyphicon glyphicon-plus"></span></Button>
              </Col>
            </FormGroup>
          </Form>}

        </Col>
      </Row>


        <Row className="margin-up">
          <Col md={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Videothumb</th>
                  <th>Videoname</th>
                  <th>Clicks</th>
                  <th>Watch</th>
                  {role === 1 && <th>Delete</th>}
                </tr>
              </thead>
              <tbody>
                {videos}
              </tbody>
          </Table>
          </Col>
        </Row>
        </div>



    )
  }

}


export default connect(null, { uploadVideo, deleteVideo,watchVideo })(CourseVideos);
