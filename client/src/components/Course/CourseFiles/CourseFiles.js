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
import './CourseFiles.css';
import allowedFormats from '../../../helpers'



class CourseFiles extends Component {

  constructor(props) {
    super(props);

    this.state = {
      file: null,
      courseId: this.props.courseId,
      isDisabled: true,
      filePaths: []
    }


    this.setFile = this.setFile.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.determineName = this.determineName.bind(this);


  }


  downloadFile(path, fileName){
    // console.log(path,fileName);
    axios({
      method: 'GET',
      url:`/api/downloadFile/${path}`,
      responseType: 'blob'})
    .then(res => {
      let aTag = document.createElement('a');
      let url = window.URL.createObjectURL(new Blob([res.data]));

      aTag.href = url;
      aTag.setAttribute('download', fileName); //or any other extension
      document.body.appendChild(aTag);
      aTag.click();

    })
    .catch(err => console.log(err))
  }

  deleteFile(materialId){

    axios.delete(`/api/deleteFile/${this.state.courseId}/${materialId}`)
    .then(res => {
      let message = res.data.message
      let status = res.data.status
      if (status) {
        alert(message)
        window.location.reload(false)
      }
    })
    .catch(err => console.log(err))
  }


  determineName(fileName){

    let splitName = fileName.split(".");
    let lastElement = splitName[splitName.length-1]


    let results = Object.keys(allowedFormats).filter((el,key) => {
        let formats =  allowedFormats[el]
        let isFormat = formats.findIndex(element => element === lastElement)
        if (isFormat > -1) {
            let final = Object.getOwnPropertyNames(allowedFormats)[key]
            return final
        }
    })

    return results[0]

  }


  setFile(e){
    let fileObj = e.target.files[0]
    this.setState({
        file: fileObj,
        isDisabled: false
    })
  }



  uploadFile(e){
    e.preventDefault()
    let fileObj = this.state.file
    let form = new FormData();
    form.append('file', fileObj);
    form.append('courseId', this.state.courseId);

    axios.post(`/api/upload`, form)
    .then(res => {
        let message = res.data.status
        let status = res.data.status
        if (status) {
          alert(message)
          window.location.reload(false);
        }else{
          alert(message)
        }

    }).catch(err => console.log(err))
  }
  

  componentDidMount() {
      let readyFilePaths = this.props.filePaths.map((val,index) => {
          return (
          <tr key={val._id}>
            <td>{val.fileName}</td>
            <td>{this.determineName(val.fileName)} Document</td>
            <td className="align-middle">
                <Button onClick={(e) => this.downloadFile(val.path,val.fileName, e)} bsSize="xsmall" >Download</Button>
            </td>
            <td className="align-middle">
              <Button onClick={(e) => this.deleteFile(val._id,e)} bsSize="xsmall" bsStyle="danger" >Delete File </Button>
            </td>
          </tr>);
      })

      this.setState({filePaths: readyFilePaths})

  }

  render() {

    return (

      <div>

      <Row>
        <Col md={6}>
          <h3> Course Files </h3>

          <Form encType="multipart/form-data" onSubmit={this.uploadFile}>
            <FormGroup controlId="courseFile">
              <Col sm={3} className="no-padding" componentClass={ControlLabel} >
                Upload file
              </Col>
              <Col sm={9}>

                <FormControl className="display-file-input" onChange={this.setFile} type="file"  />
                <Button disabled={this.state.isDisabled}  bsStyle="success" type="submit" className="pull-right" >Upload file <span className="glyphicon glyphicon-plus"></span></Button>

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
                  <th>Filename</th>
                  <th>Type</th>
                  <th>Download</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filePaths}
              </tbody>
          </Table>
          </Col>
        </Row>


        </div>



    )
  }

}


export default CourseFiles
