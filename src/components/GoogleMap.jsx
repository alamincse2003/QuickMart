import React from 'react'

const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29199.15921922844!2d90.36103679999998!3d23.822336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1732855910584!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMap