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
import {determineName} from '../../../helpers'

import { uploadFile, deleteFile, downloadFile } from '../../../actions/courseActions';
import { connect } from 'react-redux';

/**
 * CourseFiles React Class
 * @class CourseFiles
 */
class CourseFiles extends Component {

  constructor(props) {
    super(props);

    this.state = {
      file: '',
      courseId: this.props.courseId,
      isDisabled: true,
      isDisabledDelete: false
    }


    this.setFile = this.setFile.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.deleteFile = this.deleteFile.bind(this);

  }

  componentWillReceiveProps(newProps) {
    if (newProps) {
        this.setState({
          isDisabled: true,
          isDisabledDelete: false,
          file: ''
        })
    }
}

  /** Download  file inside component */
  downloadFile(path, fileName, fileId){
    this.props.downloadFile(path, fileName, fileId,this.props.courseId)
  }


  /** Delete file  */
  deleteFile(materialId){
    this.setState({isDisabledDelete: true})
    this.props.deleteFile(this.props.courseId,materialId)
  }


  /** Setfile from JavaScript and HTML5 */
  setFile(e){
    let fileObj = e.target.files[0]
    this.setState({ file: fileObj, isDisabled: false})
  }


  /** Upload  file inside component */
  uploadFile(e){
    e.preventDefault()
    this.setState({isDisabled: true})



    let fileObj = this.state.file
    let form = new FormData();
    let fileName = fileObj.name

    form.append('file', fileObj);
    form.append('courseId', this.state.courseId);

    /* Check if file with same name already uploaded */
    let findName =  this.props.filePaths.findIndex(data => data.fileName === fileName)
    if (findName > -1) {
      alert('File with same name already uploaded')
      this.setState({isDisabled: false})
      return false;
    }


    this.props.uploadFile(form)

  }


  /** Generate files for rendering table */
  generateFiles(fileData){
    return fileData.map((val,index) => {
        return (
        <tr key={val._id}>
          <td>{val.fileName}</td>
          <td>{determineName(val.fileName)} Document</td>
          <td>{val.clicks.length} </td>
          <td className="align-middle">
              <Button onClick={(e) => this.downloadFile(val.path,val.fileName,val._id,e)} bsSize="xsmall" >Download</Button>
          </td>

        { this.props.role === 1 &&  <td className="align-middle">
            <Button disabled={this.state.isDisabledDelete} onClick={(e) => this.deleteFile(val._id,e)} bsSize="xsmall" bsStyle="danger" >Delete File </Button>
          </td>}
        </tr>);
    })
  }


  render() {

    let files = this.generateFiles(this.props.filePaths)
    let role = this.props.role

    return (
      <div>
        <Row>
          <Col md={6}>
            <h3> Course Files </h3>

            {role === 1 && <Form encType="multipart/form-data" onSubmit={this.uploadFile}>
              <FormGroup controlId="courseFile">
                <Col sm={3} className="no-padding" componentClass={ControlLabel} >
                  Upload file
                </Col>
                <Col sm={9}>

                  <FormControl className="display-file-input"  ref = {(ref) => this.fileInput = ref}   onChange={this.setFile} type="file"  />
                  <Button disabled={this.state.isDisabled}  bsStyle="success" type="submit" className="pull-right" >Upload file <span className="glyphicon glyphicon-plus"></span></Button>

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
                    <th>Filename</th>
                    <th>Type</th>
                    <th>Clicks</th>
                    <th>Download</th>
                    {role === 1 && <th>Delete</th>}
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


export default connect(null, { uploadFile, deleteFile, downloadFile })(CourseFiles);
