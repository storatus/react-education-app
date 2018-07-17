import React, {Component} from 'react';
import {
  Table,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form} from 'react-bootstrap';
import axios from 'axios';
import './CourseVideos.css';



class CourseVideos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      url: null,
      courseId: this.props.courseId,
      isDisabled: true,
      videos: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }


  handleInput(e){

    let url = e.target.value
    this.setState({
      url,
      isDisabled: url === '' ? true : false
    });

  }

  checkUrlVideo(url){
    // https://stackoverflow.com/questions/2964678/jquery-youtube-url-validation-with-regex/10315969#10315969
    let urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    let result = url.match(urlRegex)
    if (result) {
      return result;
    }
    return false;
  }


  submitForm(e) {
    e.preventDefault();

    let url = this.state.url.replace(/\s+/g, '');
    let courseId = this.state.courseId

    let result = this.checkUrlVideo(url);
    if (result === false) {
        alert('Your string is not a valid youtube string')
        return;
    }
    let youtubeId = result[1];
    let youtubeKey = 'AIzaSyALhXcz4s3rk1zdGpqqHHWw-QJYLNuf0vs'

    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${youtubeId}&key=${youtubeKey}&part=snippet`)
    .then(response => {
      let title = response.data.items[0].snippet.title
      axios.post('/api/createVideo', {url, courseId, title, youtubeId})
      .then(res => {
          let message = res.message;
          let status = res.status

          if (status) {
            alert(message)
            window.location.reload(false);
          }else{
            alert(message)
          }

      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }


  watchVideo(videoObj){
    window.location.href = `https://www.youtube.com/watch?v=${videoObj.youtubeId}`
  }


  deleteVideo(videoId){

    axios.delete(`/api/deleteVideo/${this.state.courseId}/${videoId}`)
    .then(res => {
        let message = res.data.message;
        let status = res.data.status
        if (status) {
          alert(message)
          window.location.reload(false);
        }
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
      let readyVideos = this.props.videos.map((val,index) => {
          return (
          <tr key={val._id}>
            <td>{val.title}</td>
            <td className="align-middle">
                <Button onClick={(e) => this.watchVideo(val, e)} bsSize="xsmall" >Watch Video</Button>
            </td>
            <td className="align-middle">
              <Button onClick={(e) => this.deleteVideo(val._id,e)} bsSize="xsmall" bsStyle="danger" >Delete File </Button>
            </td>
          </tr>);
      })

      this.setState({videos: readyVideos})
  }



  render() {

    return(

      <div>

      <Row>
        <Col md={6}>
          <h3> Course Videos </h3>
          <Form encType="multipart/form-data" onSubmit={this.submitForm}>

            <FormGroup controlId="videoUrl">

              <Col sm={3} className="no-padding" componentClass={ControlLabel} >
                Youtube URL
              </Col>

              <Col sm={9}>
                <FormControl className="display-file-input" onChange={this.handleInput} type="text"  />
              </Col>

              <Col className="margin-up"sm={12}>
                <Button disabled={this.state.isDisabled}  bsStyle="success" type="submit" className="pull-right" >Upload Video <span className="glyphicon glyphicon-plus"></span></Button>
              </Col>

            </FormGroup>
          </Form>
        </Col>
      </Row>


        <Row className="margin-up">
          <Col md={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Videoname</th>
                  <th>Watch</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.videos}
              </tbody>
          </Table>
          </Col>
        </Row>


        </div>



    )
  }

}


export default CourseVideos
