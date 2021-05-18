import React from "react";
import axios from "axios";
import Header from "../../Layouts/Header";
import Navbar from "../../Layouts/Navbar";
import Footer from "../../Layouts/Footer";
import bg from "../../../frontOffice/assets/images/bg_1.jpg";

class Message extends React.Component {
  state = {
    chat: [],
    msg: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ msg: e.target.value });
  };
  handleSend = () => {
    if (this.state.msg != "") {
      axios
        .post("http://127.0.0.1:5000/user", { msg: this.state.msg }) //server link + send data
        // .then(res=>console.log(res)) ////display response
        .then((res) => {
          //push the response in the array chat
          let c = this.state.chat;
          c.push({ from: "User", message: this.state.msg }); //msg fron the user
          c.push({ from: "Chatbot", message: res.data }); //msg fron chatbot
          this.setState({ msg: "", chat: c });
          console.log(this.state);
          //overflow
          let interval = window.setInterval(function () {
            var element = document.getElementById("chatId");
            element.scrollTop = element.height;
            window.clearInterval(interval);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }
  };



  handleCall = ()=>{
    axios.post('http://127.0.0.1:5000/call')       //server link 
    .then(res=>{    
        console.log("Success Call !");
    })      
    .catch(err=>console.log(err)    )
};


  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div
          className="hero-wrap img"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-12d-flex align-items-center ">
                <div className="text text-center">
                  <h2>Chat with our chatbot </h2>
                  <div
                    className="container"
                    style={{ backgroundColor: "#E7e7e7", borderRadius: "15px" }}
                  >
                    <br />
                    <div
                      id="chatId"
                      style={{ overflow: "scroll", height: "50vh" }}
                    >
                      {this.state.chat.map((msg) => {
                        if (msg.from == "Chatbot") {
                          return (
                            <div
                              style={{
                                color: "white",
                                flexWrap: "wrap",
                                marginRight: "50px",
                                padding: "20px",
                                borderRadius: "10px 35px 35px 35px",
                                width: "50%",
                                backgroundColor: "#827e7e",
                                float: "left",
                                display: "flex",
                              }}
                            >
                              {msg.message}
                            </div>
                          );
                        } else
                          return (
                            <div
                              style={{
                                color: "white",
                                flexWrap: "wrap",
                                marginLeft: "50px",
                                padding: "20px",
                                borderRadius: "35px 35px 10px 35px ",
                                width: "50%",
                                backgroundColor: "#726FC4",
                                float: "right",
                                display: "block",
                              }}
                            >
                              {msg.message}
                            </div>
                          );
                      })}
                    </div>
                    <div style={{ height: "20vh", width: "60vh" }}>
                      <input
                        type="text"
                        name="msg"
                        className="form-control"
                        style={{
                          marginTop: "10px",
                          width: "100%",
                          float: "center",
                        }}
                        value={this.state.msg}
                        onChange={(e) => this.handleChange(e)}
                      />


<div style={{ display:'flex', justifyContent:'space-evenly' }}>
                      <button
                        className="btn btn-primary"
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => this.handleSend()}
                      >
                        Send
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => this.handleCall()}
                      >
                        Call us !
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Message;
