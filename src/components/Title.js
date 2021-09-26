import React from 'react';



class Title extends React.Component {

    bigTitleStyle = () => {
        return{
            textAlign: 'center',
            fontSize: '62px',
        }
    }
    titlewrapper = () => {
        return{
            display: 'flex',
            flexDirection: 'column',
        }
    }

    babytitle = () => {
        return{
            height: '15px',
            color: 'white',
            fontSize: '24px',
        }
    }
    subtitle = (dacolor) => {
        return{
            color: dacolor,
            float: 'left',
            textAlign: 'center',
            fontFamily: 'Fredoka One',
            textShadow: '3px 3px black',

            
        }
    }

    state = {
        buzzword: "  "
    }
    
    buzzBoom = (e) => {
        this.setState({buzzword: e});
    }
    buzzBlank = () =>{
        this.setState({buzzword: " "});
    }
    

    render() {
        
        return(
            <div style={this.titlewrapper()}>
                <div style={this.bigTitleStyle()}>
                    <div style={this.subtitle("#E8A122")} onMouseEnter={(e) => this.buzzBoom("(cortez's)")} onMouseLeave={this.buzzBlank}>cor</div>
                    <div style={this.subtitle("#22AFB6")} onMouseEnter={(e) => this.buzzBoom("(cozy)")} onMouseLeave={this.buzzBlank}>coz</div>
                    <div style={this.subtitle("#1FA66C")} onMouseEnter={(e) => this.buzzBoom("(corner)")} onMouseLeave={this.buzzBlank}>co</div>
                </div>
                <div style={this.babytitle()}>
                    {this.state.buzzword}
                </div>
            </div>
        )
        
    }
}

export default Title;
