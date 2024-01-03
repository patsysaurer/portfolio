import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <footer>Patsy Saurer 2023</footer> */}
        <footer className="p-10 d-block text-center text-grey">
        &copy; Patsy Saurer | {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Footer