
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.news18.com/ibnlive/uploads/2023/05/wp-image-210.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>ISMtalk</Heading>
            <SubHeading>Est. 1926</SubHeading>
        </Image>
    )
}

export default Banner;