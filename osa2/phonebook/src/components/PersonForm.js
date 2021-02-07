import React from 'react'

const PersonForm = props => {

    var persons = props.persons
    var setPersons = props.setPersons // function
    var newName = props.newName
    var setNewName = props.setNewName // function
    var newNumber = props.newNumber
    var setNewNumber = props.setNewNumber // function
    var setNewPersonList = props.setNewPersonList // function
    var handleNameChange = props.handleNameChange // function
    var handleNumberChange = props.handleNumberChange // function

    const addName = (event) => {
        event.preventDefault()
  
        /* create new object for the person, which will receive its content from components newName state */ 
        const nameObject = {
          name: newName.trim(),
          number: newNumber,
          id: persons.length + 1,
        }
  
        var checkValue = 0 // very gross way to implement this
        for (var i = 0; i < persons.length; i++) {
  
          // loop over the array, if there is match - truth value to 1
          if (persons[i].name === nameObject.name) {
            checkValue = 1
          } 
  
        }
  
        // exercute this if truth value is 1, if its not add person to phone book
        if (checkValue === 1) {
          alert(`${newName} is already added to phonebook`)
          setNewName('') 
          setNewNumber('')
        } else {
          setPersons(persons.concat(nameObject))
          /* staten päivitys */
          setNewPersonList(persons.concat(nameObject))
          console.log(`${newName} succesfully added to phonebook`)
          setNewName('')
          setNewNumber('')
        }
  
        // console.log(persons)
    }

    return (
        <div>
            <h2>add people</h2>
                <form onSubmit={addName}>
                    <div>
                    name: 
                    <input 
                        value={newName}
                        onChange={handleNameChange}
                    />
                    </div>
                    number:
                    <input 
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                    <div>
                    <button type="submit">add</button>
                    </div>
                </form>
        </div>
    )
}

export default PersonForm