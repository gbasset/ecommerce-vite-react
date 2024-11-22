import Button from 'common/design-system/Button/Button.tsx';

function App() {
    return (
        <>
            <Button variant={'contained'} onClick={() => console.log('bla')}>
                Ajouter au panier
            </Button>{' '}
            <Button
                // variant={'contained'}
                onClick={() => console.log('bla')}
            >
                Retirer du panier
            </Button>
        </>
    );
}

export default App;
