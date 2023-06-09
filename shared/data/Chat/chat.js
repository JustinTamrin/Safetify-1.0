import React from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/PageHeader";
import {
	Card,
	Col,
	OverlayTrigger,
	ProgressBar,
	Row,
	Form,
	Button,
	Container,
} from "react-bootstrap";
import ChatBubble from "./ChatBubble.js";

// import chatdata
import { chatdata } from "./chatdata";

const ChatPage = () => {
	const messages = [
		{
			id: 1,
			sender: "John",
			content: "Hello, how are you?",
			timestamp: "10:00 AM",
			isSender: false,
		},
		{
			id: 2,
			sender: "Jane",
			content: "I'm good, thanks! How about you?",
			timestamp: "10:01 AM",
			isSender: true,
		},
		{
			id: 3,
			sender: "John",
			content: "I'm doing great!",
			timestamp: "10:02 AM",
			isSender: false,
		},
	];

	return (
		<div>
			<PageHeader titles="Chat" active="Chat" items={["Home"]} />
			{/* The Chat */}
			<Row>
				<Col sm={12} md={12}>
					<Card style={{ minHeight: "70vh" }}>
						<Card.Header>
							<Card.Title as="h3">Group Chat</Card.Title>
						</Card.Header>
						<Card.Body>
							<Container fluid>
								<Row>
									<Col sm={12} md={4} style={{ borderRight: "1px solid grey" }}>
										<div className="chat-sidebar">
											<h4>Group Members</h4>
											<ul>
												<li>John</li>
												<li>Jane</li>
												<li>Bob</li>
												<li>Joe</li>
												<li>Jack</li>
												<li>Jill</li>
												<li>Jim</li>
											</ul>
										</div>
									</Col>

									<Col sm={12} md={8}>
										<div className="chat-container">
											<div className="chat-messages">
												{messages.map((message) => (
													<ChatBubble
														key={message.id}
														sender={message.sender}
														content={message.content}
														timestamp={message.timestamp}
														isSender={message.isSender}
													/>
												))}
											</div>
											<Form>
												<Form.Group controlId="messageForm">
													<Row>
														<Col xs={10}>
															<Form.Control
																type="text"
																placeholder="Type your message..."
															/>
														</Col>
														<Col xs={1}>
															<Button variant="primary" type="submit">
																Send
															</Button>
														</Col>
													</Row>
												</Form.Group>
											</Form>
										</div>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ChatPage;

//export default ChatUI;
