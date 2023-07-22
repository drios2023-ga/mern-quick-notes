import { Component } from 'react';
import { createNote } from '../../utilities/notes-service';

export default class NewNoteForm extends Component {
  state = {
    name: '',
    date: Date(),
    note: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, note} = this.state;
      const formData = {name, note};
      // The promise returned by the notes service
      // method should resolve to a user object 

      const user = await createNote(this.state);

    } catch {
      this.setState({ error: 'Save Failed - Try Again' });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Note</label>
            <input type="text" name="note" value={this.state.note} onChange={this.handleChange} required />
            <button type="submit" >SAVE</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
        <br />
        <div className="form-container">

 
        </div>
      </div>

        


    );
  }
}