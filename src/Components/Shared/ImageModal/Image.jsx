import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { fetchIdentityImage } from "../../../redux/actions/client.action";
import { withRouter } from "react-router";
import { fetchCategoryName } from "../../../redux/actions/global.action";

import { connect } from "react-redux";

class Image extends Component {
  golbalID = 0;
  dropVal: any;
  clientImage:any;
  constructor(props) {
    super(props);
    this.state = {
      name: "ImageType",
      isFileValid: false,
      isFormSubmitted: false,
      fields: {
        clientIdentityId: 0,
        clientId: 0,
        imagesType: "",
        clientImage: "",
        clientImageTypeId: 0,
        actionBy: "",
      },
    };
  }
  componentDidMount = async (data1) => {
    var data = await this.props.fetchCategoryName(this.state.name);
    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;
    }
  };
  close = () => {
    this.props.toggle();
  };
  onFileUploadChange = async (e, value) => {
    let size = 2000000;
    e.preventDefault();
    var reader = new FileReader();
    var file = e.target.files[0];
var _sts = this;
    reader.onload = function(upload) {
          var base64 = upload.target.result.split(',')[1]
     _sts.setState({
      clientImage:base64
     })
    };
    reader.readAsDataURL(file);

   
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg"
    ) {
      if (e.target.files[0].size <= 1000000) {       
        var data1 = e.target.files[0].type
        this.state.fields.imagesType=data1
        this.setState({ isFileValid: true });
      } else {
        alert("not suportes");
      }
    } else {
      alert("ok");
    }
  };
  
  uploadImage = async (e, data) => {
    e.preventDefault();
    var InfoAs = e.target.outerText;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.clientImageTypeId = globalId;
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    this.state.fields.clientImage=this.state.clientImage;
    await this.setState({ isFormSubmitted: true });

    var res = await this.props.fetchIdentityImage(this.state.fields);
    if (res == true) {
      this.props.toggle();
    } else {
    }
  };

  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.imagemodal}
          onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Photo ID</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p className="confirmation">
                  Please upload a photo of your current ID card (e.g., driver's
                  license). This will be used by Malax staff when reviewing your
                  profile but will not be shared with clients.
                </p>
              </div>

              <div className="col-lg-8 col-md-6 col-6">
                <input
                  className="login-form-textfield form-control"
                  id="file"
                  fullWidth={true}
                  type="file"
                  multiple
                  ref="fileInput"
                  onChange={this.onFileUploadChange}
                
                />
                {this.state.isFormSubmitted &&
                  this.state.isFileValid === false && (
                    <p style={{ color: "red" }}>Please upload file</p>
                  )}

                {/* {this.state.isFileValid && (
                  <img src={this.props.selectedEditdapps.image} />
                )} */}
              </div>
              <img src={"data:image/jpeg;base64,"+ this.state.fields.clientImage} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              color="blue"
              type="submit"
              className="btn btn-sm btn-primary"
              //  disabled={this.state.fields.consentFormStatus}
              onClick={this.uploadImage}
            >
              CurrentPhoto
            </button>

            <button
             color="grey"
             type="button"
             className="btn btn-sm btn-white"
             onClick={this.close}
           >
             Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    formVal: state.form,
    user: state.user.user,
    saveConsent: state.clientReducer.saveConsent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIdentityImage: (data) => dispatch(fetchIdentityImage(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Image));
