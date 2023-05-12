import { Link } from "react-router-dom";
import Swal from "sweetalert2";

 

// eslint-disable-next-line react/prop-types
const Coffeecard = ( {coffeInfo}) => {
        // eslint-disable-next-line react/prop-types
        const {coffee,_id, photo, details, category, supplier ,quantity} = coffeInfo;
         const handleDelete = _id => {
                console.log(_id)
                Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                        //  

                         fetch(`http://localhost:5000/coffee/${_id}`, {
                                method: 'DELETE'
                         })
                         .then(res => res.json())
                         .then(data => {
                                console.log(data)
                                if(data.deletedCount>0){
                        Swal.fire(
                                        'Deleted!',
                                        'Your Coffee has been deleted.',
                                        'success'
                                        )
                                }
                         })
                        }
                      })
         }
        
        return (
                 
                    <div className="card lg:card-side px-32 shadow-2xl mt-5 w-[90%] mx-auto py-8 bg-base-100">
  <figure><img className="w-[100%] h-72" src= {photo}/></figure>
  <div className="card-body ">
   <div className="flex">
   <div>
   <h2 className="card-title font-bold"> Name: {coffee}</h2>
    <p><span className="font-bold">Supplier: </span>{supplier}</p>
    <p><span className="font-bold">Category: </span>{category}</p>
    <p><span className="font-bold">Quantity: </span>{quantity}</p>
    <p><span className="font-bold">Details:  </span>{details}</p>
   </div>
   
    <div className=" btn-group btn-group-vertical space-y-2">
  <button className="btn">View</button>
  <Link to = {`updateCoffee/ ${_id}`}>
  <button className="btn">Edit</button>
  </Link>
  <button onClick={() => handleDelete(_id)} className="btn bg-red-400">X</button>
</div>
   </div>
    
  </div>
</div>    
                
        );
};

export default Coffeecard;