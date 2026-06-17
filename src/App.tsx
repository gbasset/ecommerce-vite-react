import Header from 'common/layout/Header/Header';
function App() {
    const handleSubmit = (search: string) => {
        console.log(search);
    };
    const cartCount = 3;
    return (
            <Header onSubmit={handleSubmit} cartCount={cartCount} />
    );
}

export default App;
