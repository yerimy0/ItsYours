import { Box2, UpdateBooks, UpdateTitle, Button, ButtonBox, Img } from '../HomeStyle';
import SearchBar from '../../../../components/SearchBar';

function Section2() {
	const pics = ['book1.png', 'book2.png', 'book3.png', 'book4.png', 'book5.png'];
	return (
		<Box2>
			<SearchBar />
			<div className="UpdateSection">
				<UpdateTitle>방금 올라온 도서</UpdateTitle>
				<UpdateBooks>
					{pics.map((pic, i) => (
						<Img key={i} src={`/${pic}`} alt={`Book ${i}`} />
					))}
				</UpdateBooks>
				<ButtonBox>
					<Button>더보기</Button>
				</ButtonBox>
			</div>
		</Box2>
	);
}

export default Section2;
