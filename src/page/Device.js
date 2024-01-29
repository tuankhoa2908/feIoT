import React from "react";

const Device = () => {
    return (
        <div>
            <h1>List Devices Used</h1>
            <div className="d-flex flex-wrap gap-3">
                <div className="device-container d-flex flex-column gap-3">
                    <div className="mq2">
                        <h2>MQ2 Sensor</h2>
                        <div className="mq2-context">
                            <div className="mq2-image d-flex  justify-content-center align-items-center">
                                {/* <img src="https://rydepier.files.wordpress.com/2015/07/img_2006.png"></img> */}
                                <img src="https://ai.thestempedia.com/wp-content/uploads/2022/07/MQ-2-Gas-Sensor-2.png" />
                            </div>
                        </div>
                    </div>
                    <div className="esp8266">
                        <h2>ESP8266</h2>
                        <div className="esp8266-content">
                            <div className="esp8266-image d-flex">
                                <img src="https://e7.pngegg.com/pngimages/641/973/png-clipart-microcontroller-nodemcu-esp8266-arduino-wi-fi-esp8266-electronics-data.png" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Device;