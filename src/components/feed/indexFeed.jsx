import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './styleFeed.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feed(props) {
    const { category, title, date, author, content } = props;
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <Card>
            <Card.Header as="h8">{category}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p>Data de Publicação: {date}</p>
                <p>Autor: {author}</p>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                    Leia Mais
                </Button>
            </Card.Body>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Lorem ipsum dolor sit amet. Et soluta magni et expedita galisum qui amet modi cum consectetur autem nam dolorem alias est corporis consequatur. In quaerat totam id esse corporis est nesciunt impedit ex neque aliquam eum repellat aliquid qui internos enim qui libero distinctio. Eum vitae eligendi nam aspernatur sint eos dicta natus est esse magnam et velit adipisci et vitae labore sit suscipit voluptatem. Vel ipsum iure et veniam error in labore repellendus. Eum rerum nihil non dolores modi eos iure reiciendis aut architecto tempora. Eum internos Quis ea atque delectus qui inventore quas aut reiciendis facere qui saepe reprehenderit! Non animi exercitationem qui quia temporibus aut perferendis expedita At corrupti distinctio ut distinctio laudantium et dicta minima in consequatur impedit? </p><p>Qui quos officia eum rerum nemo hic reiciendis libero vel molestias earum in sunt voluptas. Hic inventore facere et eius sequi qui odit obcaecati sed saepe molestias eos quisquam impedit! Eum animi recusandae et nesciunt asperiores qui consequatur itaque ex facilis consequatur qui autem autem id autem accusamus qui quibusdam doloremque? Est unde maiores et repellendus ipsum eos dignissimos dolore vel animi exercitationem et quisquam minus ea expedita eaque! Quo accusamus dolores qui tempora aliquid ea nesciunt odit ut optio cumque ut galisum neque et omnis galisum in consectetur officia. </p><p>Est soluta nemo eos minus voluptates non necessitatibus galisum. Et porro repellat qui esse accusamus a repellat quod est corrupti veniam est vero galisum? Ex nobis quia est vero quibusdam id accusamus Quis est odio iste qui libero modi ut omnis voluptas. Et quia soluta aut maiores consequuntur et consequatur repellendus. Non nemo neque est voluptates natus non cumque facilis in autem architecto hic dolores consectetur est molestiae sequi. Est aperiam iusto non consequatur ipsa vel nihil sapiente vel quibusdam enim sit doloremque galisum et natus nulla. Est delectus voluptates in debitis delectus sed molestiae omnis 33 neque temporibus a inventore quos ut laboriosam consequatur. Sed beatae omnis ex similique galisum ab doloribus voluptatibus ab error internos aut beatae Quis. 33 tempore eaque qui quod cupiditate quo internos galisum cum nesciunt voluptate non enim nesciunt sit sequi iure non beatae omnis. </p>
                    {content}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Card>
    );
}
