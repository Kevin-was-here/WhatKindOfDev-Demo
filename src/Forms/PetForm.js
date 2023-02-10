import './PetForm.css';

function PetForm() {
  return (
    <div className="pet-form">
      <p>Do you like cats or dogs?</p>
    
      <span>
        <input type="checkbox" id="Cat" name="Cat" value="Cat" />
        <label htmlFor="Cat">Cats 😻</label>
        </span>
        <span>
        <br />
        <input type="checkbox" id="Dog" name="Dog" value="Dog" />          
        <label htmlFor="Dog">Dogs 🐶</label>
      </span>
    </div>
  );
}

export default PetForm;
