import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      gender: "",
      phoneNumber: "",
      password: "",
      error: ""
    };
  }
  render() {
    const handleNameChange = (e) => {
      this.setState({
        name: e.target.value
      });
    };
    const handleEmailChange = (e) => {
      this.setState({
        email: e.target.value
      });
    };
    const handlePhoneChange = (e) => {
      this.setState({
        phoneNumber: e.target.value
      });
    };
    const handleGenderChange = (e) => {
      this.setState({
        gender: e.target.value
      });
    };
    const handlePasswordChange = (e) => {
      this.setState({
        password: e.target.value
      });
    };

    const submitForm = (e) => {
      e.preventDefault();
      const pattern = /^[0-9A-Z-a-z- ]+$/;
      const patternNum = /^[0-9]+$/;
    if(this.state.name == "" || this.state.email == "" || this.state.gender == "" || this.state.password == "" || this.state.phoneNumber == ""){
        this.setState({
          error:"All fields are mandatory"
        })
      }
      else if (!pattern.test(this.state.name)) {
        this.setState({
          error: "Name is not alphanumeric"
        });
      }else if (!this.state.email.includes("@")) {
        this.setState({
          error: "Email must contain @"
        });
      }else if (
        !this.state.gender === "male" ||
        !this.state.gender === "female" ||
        !this.state.gender === "others"
      ) {
        this.setState({
          error: "Please identify as male, female or others"
        });
      }else if (this.state.password.length < 6) {
        this.setState({
          error: "Password must contain atleast 6 letters"
        });
      }else{
        alert("successful submit")
      }
     console.log(this.state.error)
    };
    return (
      <>
        <form onSubmit={submitForm}>
          <input
            placeholder="name"
            data-testid = 'name'
            value={this.state.name}
            onChange={handleNameChange}
            type="text"
          />
          <input
            placeholder="email"
            data-testid = 'email'
            value={this.state.email}
            onChange={handleEmailChange}
            type="email"

          />
          <select
            data-testid = 'gender'
            value={(this.state.gender = "male")}
            onChange={handleGenderChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <input
            placeholder="phoneNumber"
            data-testid = 'phoneNumber'
            value={this.state.phoneNumber}
            onChange={handlePhoneChange}
            type="number"

          />
          <input
            placeholder="password"
            data-testid = 'password'
            value={this.state.password}
            onChange={handlePasswordChange}
            type='password'

          />
          <button type="submit" data-testid = 'submit'>Submit Form</button>
        </form>
        {this.state.error ? (
          <div style={{ color: "red" }}>{this.state.error}</div>
        ) : null}
      </>
    );
  }
}
export default App;
