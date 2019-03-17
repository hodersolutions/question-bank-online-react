import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import './ModuleCard.css';
import { Link } from 'react-router-dom';

export class ModuleCard extends Component {
    render() {
        return (
            <Link to='/module/show' className='card-container'>
                <Card>
                    <Card.Header>{this.props.id}. {this.props.module}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}{this.props.description}{' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{this.props.author}</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Link>
        )
    }
}

export default ModuleCard;