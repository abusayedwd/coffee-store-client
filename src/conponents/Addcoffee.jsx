import Swal from 'sweetalert2'

const Addcoffee = () => {

        const handleAddcoffee = event => {
                event.preventDefault();

                const form = event.target;
                const coffee = form.coffee.value;
                const quantity = form.quantity.value;
                const supplier = form.supplier.value;
                const taste = form.taste.value;
                const category = form.category.value;
                const details = form.details.value;
                const photo = form.photo.value;

                const newCoffee = {coffee,quantity,supplier,taste,category,details,photo};
                console.log(newCoffee)

                fetch('http://localhost:5000/coffee',{
                        method: 'POST',
                        headers: {
                                'content-type':'application/json'
                        },
                        body:JSON.stringify(newCoffee)
                })
                .then(res=> res.json())
                .then(data => {
                        console.log(data)
                        if(data.insertedId){
                                Swal.fire({
                                        title: 'success',
                                        text: 'do u want to added users?',
                                        icon: 'success',
                                        confirmButtonText: 'Ok'
                                      })
                        }
                })
        }
        return (
                <div className='bg-[#f4f3f0] p-24'>
                <form onSubmit={handleAddcoffee}>

                        {/* name and quantity */}
         <div className='md:flex'>
               
                       <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text">available coffee</span>
                        </label>
                        <label className="input-group">
                         
                        <input type="text" name='coffee' placeholder="coffe name" className="input input-bordered w-full" />
                        </label>
                        </div>                         
                 
                
                       <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                        <span className="label-text">available quantity</span>
                        </label>
                        <label className="input-group">
                         
                        <input type="text" name='quantity' placeholder="quantity" className="input input-bordered w-full" />
                        </label>
                        </div>                         
                 
        </div>    
                        {/* supplier and teste */}
         <div className='md:flex'>
               
                       <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text">supplier</span>
                        </label>
                        <label className="input-group">
                         
                        <input type="text" name='supplier' placeholder="supplier" className="input input-bordered w-full" />
                        </label>
                        </div>                         
                 
                
                       <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                        <span className="label-text">taste</span>
                        </label>
                        <label className="input-group">
                         
                        <input type="text" name='taste' placeholder="taste" className="input input-bordered w-full" />
                        </label>
                        </div>                         
                 
        </div>    
                        {/* category and details */}
         <div className='md:flex'>
               
                       <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text">category</span>
                        </label>
                        <label className="input-group">
                         
                        <input type="text" name='category' placeholder="category" className="input input-bordered w-full" />
                        </label>
                        </div>                         
                 
                
                       <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                        <span className="label-text">details</span>
                        </label>
                        <label className="input-group">
                         
                        <input type="text" name='details' placeholder="details" className="input input-bordered w-full" />
                        </label>
                        </div>                         
                 
        </div>    
                        {/* photo url row   */}
         <div className=' '>
               
                       <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text">photo url</span>
                        </label>
                        <label className="input-group">
                         
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                        </div>                         
                    
        </div>    
                <input type="submit" value="Add Coffee" className='btn btn-block mt-8' />
                </form>   
                </div>
        );
};

export default Addcoffee;