import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const Header = styled.header`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	color: ${(props) => props.theme.accentColor};
	font-size: 48px;
`;

const Loader = styled.span`
	text-align: center;
	display: block;
`;

interface RouterState {
	state: {
		name: string;
	};
}

function Coin() {
	const [loading, setLoading] = useState(true);
	const { coinId } = useParams();
	const { state } = useLocation() as RouterState;
	return (
		<Container>
			<Header>
				<Title>{state?.name || "Loading"}</Title>
			</Header>
			{loading ? <Loader>Loading...</Loader> : null}
		</Container>
	);
}

export default Coin;
