import React, { useState } from "react";
import { FormBtn, TextArea } from "../../components/Form";
import API from "../../utils/API";
import "./home.css";

function HomePage() {
  const [state, setState] = useState({text: ""});
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSend = () => {
    API.saveExample(state).then((res) => {
      setState({text: ""})
      const id = res.data._id;
      API.getExample(id).then((res) => {
        setResponse(res.data.text);
        setLoading(false);
      });
    });
  };

  return (
    <div className="container">
      <h2 className="homepage-text">WELCOME! Add text below!</h2>
      <TextArea
        name="text"
        className="home-form-input"
        onChange={handleInputChange}
        value={state.text}
      />
      <FormBtn className="home-form-formbtn" onClick={onSend}>
        SUBMIT
      </FormBtn>
      <h4 className="your-text-title"> Your text here: </h4>
      <>{loading === false && < div className="response-text">{response}</div>}</>
    </div>
  );
}
export default HomePage;
