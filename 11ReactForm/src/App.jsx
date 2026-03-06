import { useForm } from "react-hook-form";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Your Data is", data);

  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name  </label>
        <input {...register(
          'firstName', { 
            required: true, 
            minLength:{ value:3, message:"min len is 3 and max is 6"},
            maxLength: 6 })}/>
            {errors.firstName && <p>{errors.firstName.message}</p> }
      </div>
      <br />
      <div>
        <label>Surname  </label>
        <input {...register('Surname')}/>
      </div>
      <br />
      <div>
        <label>Age  </label>
        <input {...register('Age')}/>
      </div>
      <br />
      <button>
        Submit
      </button>
    </form>
  )
}

export default App
