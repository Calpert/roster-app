function Player(props){
    console.log('player props',props)
    return <p>{props.name} his jersey number is {props.jersey}</p>
}

export default Player;