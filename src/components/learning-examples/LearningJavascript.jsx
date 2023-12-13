const person = {
    name: 'Kundan ojha',
    address: {
        line1: 'Ballendur,Green Glen Layout',
        city: 'Bangalore',
        country: 'India'
    },
    profiles: ['twitter', 'Instagram', 'LinkedIn'],
    printProfile: () => {

        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavascript() {

    return (
        <div>
            <div> {person.name} </div>
            <div> {person.address.line1} </div>
            <div> {person.address.city} </div>
            <div> {person.address.country} </div>
            <div> {person.profiles[0]} </div>
            <div> {person.profiles[1]} </div>
            <div> {person.printProfile()} </div>
        </div>
    )

}