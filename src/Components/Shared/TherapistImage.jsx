import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import {
  fetchTherapistIdentityImage,
  getIdentityImage,
} from "../../redux/actions/therapist.action";
import { withRouter } from "react-router";
import { fetchCategoryName } from "../../redux/actions/global.action";

import { connect } from "react-redux";

class TherapistImage extends Component {
  golbalID = 0;
  dropVal: any;
  photoImg: any;
  therapistImage: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "ImageType",
      isFileValid: false,
      isFormSubmitted: false,
      fields: {
        therapistIdentityId: 0,
        therapistId: 0,

        imagesType: "",
        therapistImage: "",
        therapistImageTypeId: 0,
        actionBy: "",
      },
    };
  }
  componentDidMount = async (data1) => {
    var data = await this.props.fetchCategoryName(this.state.name);
    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;

      //get-IdPhoto-globalID
      var globalPhoto = this.dropVal.filter((x) => x.CodeName == "IDPhoto")[0]
        .GlobalCodeId;
    }

    //get-identity-image
    var data1 = this.props.user.Data.TherapistId;
    this.state.fields.therapistId = data1;
    var aa = await this.props.getIdentityImage(data1);

    this.photoImg = this.props.currentImage.data.Data.TherapistIdentityImages.filter(
      (x) => x.TherapistImageTypeId == globalPhoto
    )[0].TherapistImage;

    console.log("photoImg-------", this.photoImg);
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
    reader.onload = function (upload) {
      var base64 = upload.target.result.split(",")[1];
      _sts.setState({
        therapistImage: base64,
      });
    };
    reader.readAsDataURL(file);

    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg"
    ) {
      if (e.target.files[0].size <= 1000000) {
        var data1 = e.target.files[0].type;
        this.state.fields.imagesType = data1;
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

    this.state.fields.therapistImageTypeId = globalId;
    var data1 = this.props.user.Data.TherapistId;
    this.state.fields.therapistId = data1;
    this.state.fields.therapistImage = this.state.therapistImage;
    await this.setState({ isFormSubmitted: true });

    var res = await this.props.fetchTherapistIdentityImage(this.state.fields);
    if (res == true) {
      this.props.toggle();
    } else {
    }
  };

  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.imageModal}
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
                {this.currentImg && <img src={this.photoImg} />}

                {this.state.isFormSubmitted &&
                  this.state.isFileValid === false && (
                    <p style={{ color: "red" }}>Please upload file</p>
                  )}
              </div>

              {this.state.fields.therapistImage != "" && (
                <img
                  src={
                    "data:image/jpeg;base64," + this.state.fields.therapistImage
                  }
                />
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              color="blue"
              type="submit"
              className="btn btn-sm btn-primary"
              onClick={this.uploadImage}
            >
              IDPhoto
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
    currentImage: state.therapistReducer.saveIdentity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTherapistIdentityImage: (data) =>
      dispatch(fetchTherapistIdentityImage(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    getIdentityImage: (data) => dispatch(getIdentityImage(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TherapistImage)
);
