import React from "react";
import BookList from "./bookCreate";
export class BookView extends React.Component {
  state = {
    bookDetails: [
      {
        key: "",
        Value: "",
        description: ""
      }
    ]
  };
  
  handleChange = e => {
    if (["key", "Value", "description"].includes(e.target.key)) {
      let bookDetails = [...this.state.bookDetails];
      bookDetails[e.target.dataset.id][e.target.key] = e.target.value;
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };
  addNewRow = e => {
    this.setState(prevState => ({
      bookDetails: [
        ...prevState.bookDetails,
        {
            key: "",
            value: "",
            description: ""
        }
      ]
    }));
  };
  deteteRow = index => {
    this.setState({
      bookDetails: this.state.bookDetails.filter((s, sindex) => index !== sindex)
    });
  };
  clickOnDelete(record) {
    this.setState({
      bookDetails: this.state.bookDetails.filter(r => r !== record)
    });
  }
  render() {
    let { bookDetails } = this.state;
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="column" />
            <div className="column2">
              <h2 className="Text"></h2>
              <div className="container">
                <div className="row" id="exp">
                  <BookList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} bookDetails={bookDetails} data={this.state}/>
                  
                  
                </div>
             
              </div>
            
            </div>
            
            <div className="column" />
            
          </div>
          
        </form>
      </div>  
    );
    
  }
};
export default document.getElementById("exp2"); 

// export const datas=BookView.bookDetails;
