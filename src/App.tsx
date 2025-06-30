import ProfileCard from './Components/ProfileCard'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="d-flex align-items-center min-vh-100">
    <div className='container'>
        <div className="row justify-content-center">  
          <ProfileCard
            name="Sarah Ali"
            image="https://randomuser.me/api/portraits/women/17.jpg"
            title="Frontend Developer"
            description="Loves building responsive UIs with React and TypeScript."
          />
          <ProfileCard
            name="Ahmad Khan"
            image="https://randomuser.me/api/portraits/men/75.jpg"
            title="Backend Engineer"
            description="Node.js database enthusiast."
          />
          <ProfileCard
            name="Homer Simpson"
            image="https://randomuser.me/api/portraits/men/65.jpg"
            title=""
            description="Loves erldor. Undessrrvises."
          />
        </div>
      </div>
      </div >
  )
}

export default App
