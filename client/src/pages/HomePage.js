import React from 'react';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      displaySeeker: false,
      displayEmployer: false,
    };
  }

  carousel = () => {
    return (
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  };

  seekerForm = (event) => {
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Seeker
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          First Name<br />
          <input type="text" placeholder="John" required />

          Last Name<br />
          <input type="text" placeholder="Doe" required />

          Email Address<br />
          <input type="text" placeholder="jdoe@example.com" required />

          City<br />
          <input type="text" placeholder="Buffalo" />

          State<br />
          <input type="text" placeholder="New York" required />

          Zip Code<br />
          <input type="text" placeholder="10450" required />

          Experience (select as many as apply)<br />
          <input type="checkbox" name="looking-for" value="GD" />
          Graphic Designer<br />
          <input type="checkbox" name="looking-for" value="PA" />
          Painter<br />
          <input type="checkbox" name="looking-for" value="EL" />
          Electrician<br />
          <input type="checkbox" name="looking-for" value="CA" />
          Carpenter<br />
          <input type="checkbox" name="looking-for" value="FS" />
          Food Servicer<br />
          <input type="checkbox" name="looking-for" value="OT" />
          Other<br />
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }

  employerForm = () => {
    return (
      <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#employerForm">
          Launch demo modal
        </button>
        <div class="modal fade" id="employerForm" tabindex="-1" role="dialog" aria-labelledby="employerForm" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Business</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                First Name<br />
                <input type="text" placeholder="John" required />

                Last Name<br />
                <input type="text" placeholder="Doe" required />

                Email Address<br />
                <input type="text" placeholder="jdoe@example.com" required />

                City<br />
                <input type="text" placeholder="Buffalo" />

                State<br />
                <input type="text" placeholder="New York" required />

                Zip Code<br />
                <input type="text" placeholder="10450" required />

                Experience (select as many as apply)<br />
                <input type="checkbox" name="looking-for" value="GD" />
                Graphic Designer<br />
                <input type="checkbox" name="looking-for" value="PA" />
                Painter<br />
                <input type="checkbox" name="looking-for" value="EL" />
                Electrician<br />
                <input type="checkbox" name="looking-for" value="CA" />
                Carpenter<br />
                <input type="checkbox" name="looking-for" value="FS" />
                Food Servicer<br />
                <input type="checkbox" name="looking-for" value="OT" />
                Other<br />
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {displaySeeker} = this.state;
    const {displayEmployer} = this.state;
    return (
      <div>
        <div>The First Step is Reentry</div>
        {this.carousel}
        <button className="" onClick={(event) => this.setState({displayButton: true})}>Seeker</button>
        {displayButton && this.seekerForm()}
        <button className="" onClick={() => this.employerForm()}>Employers</button>
      </div>
    );
  }
}

export default HomePage;