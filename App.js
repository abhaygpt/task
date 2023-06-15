
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="https://th.bing.com/th/id/R.d5c5f2246919265f53e6f56f80071dd3?rik=Q7O1od8exJDnbQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f37%2f82%2fBI78kU.jpg&ehk=yP98fVqkFdzsxnJdZ17FmIQKByMdglW%2bEUXxXB7Mf6o%3d&risl=&pid=ImgRaw&r=0" alt="photos" className='image'
      />
  
  <div className="tab">
    <div className="price">
        <span className='details'>
          <p className='text'>DETACHED HOUSE</p>
          <h6>5Y OLD</h6>   
        </span>
        <strong className='rate'>$750,000</strong>
        <p className="lighttext">742 Evergreen Terrace</p>
    </div>
    <div className='mobile'>
    <div className="Relator">
      <p className="lighttext">RELATOR</p>
      <div className="paragraph">
        <img src="https://th.bing.com/th/id/OIP.29GsbDO_xO2EkfFIsaJZRwHaHW?pid=ImgDet&rs=1" alt="photos" className='loginimg' />
        <span className="texts">
          <p>Tiffany Heffner</p>
          <p className="lighttext">(555) 555-4321</p>
        </span>

      </div>
    </div>

    <div className="stats">
      <span className='bedroom'>
        <img src="https://icon-library.com/images/bed-icon-png/bed-icon-png-29.jpg" alt="photos" className='bedroomimg'
     />
        <p>3 Bedroom</p>
      </span>

      <span className="bathroom">
        <img src="https://th.bing.com/th/id/R.74249e845fbae1789fb32ae92cd109d8?rik=W90EPbVYXX73Qw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_554305.png&ehk=UY8KSW8IHyNX7xvfMsAb98bNV5nL0rEepWs%2b%2bGFfmKE%3d&risl=&pid=ImgRaw&r=0" alt="photos" className='bathroomimg' />

        <p>2 Bathroom</p>
      </span>

    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
