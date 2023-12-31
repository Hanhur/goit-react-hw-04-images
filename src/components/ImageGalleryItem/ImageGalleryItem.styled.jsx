import styled from 'styled-components';

const ImageGalleryItemStyled = styled.li`
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

    & img {
        display: block;
        width: 100%;
        height: 260px;
        object-fit: cover;
        transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 4px;

        &:hover {
        transform: scale(1.05);
        cursor: zoom-in;
        }
    }
`;

export default ImageGalleryItemStyled;