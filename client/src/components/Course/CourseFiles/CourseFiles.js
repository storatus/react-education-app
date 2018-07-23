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
import {determineName} from '../../../helpers'

import { uploadFile, deleteFile } from '../../../actions/courseActions';
import { connect } from 'react-redux';

class CourseFiles extends Component {

  constructor(props) {
    super(props);

    this.state = {
      file: null,
      courseId: this.props.courseId,
      isDisabled: true,
      isDisabledDelete: false
    }


    this.setFile = this.setFile.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.deleteFile = this.deleteFile.bind(this);

  }


  componentWillReceiveProps(nextProps) {
    if (nextProps) {
        this.setState({
          isDisabled: false,
          isDisabledDelete: false})
    }
}


  downloadFile(path, fileName){
    // Ref.
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
    this.setState({isDisabledDelete: true})
    this.props.deleteFile(this.props.courseId,materialId)
  }


  setFile(e){
    let fileObj = e.target.files[0]
    this.setState({ file: fileObj, isDisabled: false})
  }



  uploadFile(e){
    e.preventDefault()
    this.setState({isDisabled: true})

    let fileObj = this.state.file
    let form = new FormData();
    form.append('file', fileObj);
    form.append('courseId', this.state.courseId);
    this.props.uploadFile(form)

  }


  generateFiles(fileData){
    return fileData.map((val,index) => {
        return (
        <tr key={val._id}>
          <td>{val.fileName}</td>
          <td>{determineName(val.fileName)} Document</td>
          <td className="align-middle">
              <Button onClick={(e) => this.downloadFile(val.path,val.fileName, e)} bsSize="xsmall" >Download</Button>
          </td>
          <td className="align-middle">
            <Button disabled={this.state.isDisabledDelete} onClick={(e) => this.deleteFile(val._id,e)} bsSize="xsmall" bsStyle="danger" >Delete File </Button>
          </td>
        </tr>);
    })
  }


  render() {

    let files = this.generateFiles(this.props.filePaths)

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
                  {files}
                </tbody>
            </Table>
            </Col>
          </Row>


        </div>
    )
  }
}


export default connect(null, { uploadFile, deleteFile })(CourseFiles);
