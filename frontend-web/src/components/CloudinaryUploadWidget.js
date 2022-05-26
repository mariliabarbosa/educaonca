import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "did5eemdu",
        uploadPreset: "aejxxplv"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          localStorage.setItem("video-url", result.info.url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Anexar vídeo
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
