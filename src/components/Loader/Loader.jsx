import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderBox>
            <RotatingLines height={20} width={20} strokeColor="purple" color="#3f51b5" />
        </LoaderBox>
    )
}
export default Loader;