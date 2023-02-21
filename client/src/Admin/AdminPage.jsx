import React from 'react'
import "../Admin/Adminpage.css"

const AdminPage = () => {
  return (
    <div>
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Resturent</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            
            <div className='backbtn'>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default AdminPage