import React, { Component } from 'react';
import Webcam from "react-webcam";

class EditUserComponent extends React.Component {
    /*setRef = a => {

        debugger;
        console.log("123");
        navigator.mediaDevices.enumerateDevices().then(function (devices) {

            devices.forEach(function(device) {
                if(device.deviceId === 'b356c33cc11f49ea2278962d02ea36ca7e9d31d1507fd312a6887ef9198925ad'){
                    //  this.webcam = webcam;
                }

                console.log(device.kind + ": " + device.label +
                    " id = " + device.deviceId);
            });
        });

       // console.log("1233");
    };*/

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
    };

    render() {
        /*const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "env"
        };

        const videoConstraints2 = {
            width: 640,
            height: 480,
            facingMode: "user"
        };*/

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={{margin:'10px'}}>

                        <Webcam
                        audio={false}
                        height={350}
                      //  ref={this.setRef}
                        screenshotFormat="image/jpeg"
                      //  videoSource="b356c33cc11f49ea2278962d02ea36ca7e9d31d1507fd312a6887ef9198925ad"
                        width={350}
                        //videoConstraints={videoConstraints}
                    />
                      {/*  <button onClick={this.capture}>Capture photo</button>*/}
                    </div>

                    <div className="col-sm" style={{margin:'10px'}}>
                        <Webcam
                            audio={false}
                            height={350}
                          //  ref={this.setRef}
                          //  videoSource="b356c33cc11f49ea2278962d02ea36ca7e9d31d1507fd312a6887ef919892a"
                            screenshotFormat="image/jpeg"
                            width={350}
                          //  videoConstraints={videoConstraints2}
                        />

                    </div>
                </div>
            </div>

        );
    }
}
export default EditUserComponent;