import React, { useEffect, useState } from 'react'

function IPAddress({url}) {
    const [ipAddress, setIPAddress] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setIPAddress(data.ip))
        .catch((error) => console.log(error))
    },[ipAddress])
  return (
    <div>
      {ipAddress}
    </div>
  )
}

export default IPAddress
