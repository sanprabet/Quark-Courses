import React from 'react'
import Modal from 'react-modal'

import Video from './Video'
import Test from './Test'

import './Styles/Topic.css'
import './Styles/TopicPopup.css'

Modal.setAppElement('#content')

export default class TopicPopup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            testIsOpen: false
        }
    
        this.openModal = () =>{
            this.setState({
                modalIsOpen: true
            })
        }
    
        this.closeModal = () =>{
            this.setState({
                modalIsOpen: false,
                testIsOpen: false
            })
        }
    
        this.openTest = () =>{
            this.setState({
                testIsOpen: true
            })
        }
    
        this.closeTest = () =>{
            this.setState({
                testIsOpen: false
            })
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <button onClick={this.openModal} type="button" class="btn btn-outline-primary topic">
                    <div className="topic__title">
                        <h3>{this.props.info.topic}</h3>
                    </div>
                </button>
                <Modal isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.modalIsOpen}>
                        <div className="modal__header">
                            <button onClick={this.closeModal} className="modal__header-button">
                                <svg className="modal__header-logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                            </button>
                        </div>
                        {this.state.testIsOpen? <Test questions={this.props.questions}  /> : <Video video={this.props.info.link} openTest={this.openTest} /> }
                        <div className="modal__test">
    
                        </div>
                </Modal>
            </React.Fragment>      
        )
    }
}