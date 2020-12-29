import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { fetchIdentityImage } from "../../../redux/actions/client.action";
import { withRouter } from "react-router";
import { fetchCategoryName } from "../../../redux/actions/global.action";
import { API_HOST, API_KEY } from "../../../utils/config/constants/index";

import { connect } from "react-redux";

class Image extends Component {
  golbalID = 0;
  dropVal: any;
  image: any;
  clientId = "";
  constructor(props) {
    super(props);
    this.state = {
      isFileValid: false,
      isFormSubmitted: false,
      fields: {
        id: 0,
        imageType: "profile",
        image: "",
      },
    };
  }
  componentDidMount = async (data1) => {
    // var data = await this.props.fetchCategoryName(this.state.name);
    // if (data != false) {
    //   this.dropVal = data.data.Data.globalCodeData;
    // }
     this.clientId = this.props.userId;
    this.state.fields.id =  this.clientId;
  };
  close = () => {
    this.props.toggle();
  };
  onFileUploadChange = async (e, value) => {
    let size = 2000000;
    e.preventDefault();
    var reader = new FileReader();
    debugger
    var file = e.target.files[0];
    var _sts = this;
    debugger
    this.state.fields.image = file.name
    console.log("image",this.state.fields.image)
    reader.readAsDataURL(file);
    reader.onload = function (upload) {
      debugger
      //       var base64 = upload.target.result.split(',')[1]
      //  _sts.setState({
      //   image:base64
      //  })
  
      // const files = e.target.files
      const formData = new FormData()
      formData.append('id',  this.clientId)
      formData.append('imageType', 'profile')
      formData.append('image', file[0])

      // const addImage = (data) => {
      //   var token = data.id;
      //   debugger
      //   return fetch("post", `${API_HOST}/UploadClientImage?code=${API_KEY}`, data,{
      //     token,
      //   });
      // };;



      const addImage = (data) => {
        fetch(`${API_HOST}/UploadClientImage?code=${API_KEY}`, {
          method: 'POST',
          header: { 'token': data.id },
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          })
    
      }
    };
   

   
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg"
    ) {
      if (e.target.files[0].size <= 1000000) {       
        // var data1 = e.target.files[0].type
        // this.state.fields.imageType=data1
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
    // var InfoAs = e.target.outerText;
    // var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
    //   .GlobalCodeId;
    // this.state.fields.clientImageTypeId = globalId;
    var clientId = this.props.userId;
    this.state.fields.id = clientId;
    this.state.fields.image=this.state.image;
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
              <img src={"data:image/jpeg,"+ this.state.fields.image} />
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
    userId: state.persist.c_user.token,
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
