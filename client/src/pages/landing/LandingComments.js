import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import LandingComment from './LandingComment';

const LandingComments = ({ projectId }) => {
  const [comments, setComments] = useState(null)

  useEffect(() => {
    axios.get(`/api/projects/${projectId}/comments?limit=2`)
      .then(res => setComments(res.data))
      .catch(console.log)
  }, [])

  return (
    <div>
      <b><h3>Comments</h3></b>
      
      {comments?.map(comment => <LandingComment comment={comment} />)}
    </div>

  )
}

export default LandingComments