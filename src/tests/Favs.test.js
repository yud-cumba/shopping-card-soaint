import { Favs } from '../components/Favs'
import ShallowRenderer from 'react-test-renderer/shallow';

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
    React.useContext = realUseContext;
});
describe('Favs', () => {
  it('debería mostrar el titulo mis compras', () => {
    useContextMock.mockReturnValue("Test Value");
    const element = new ShallowRenderer().render(
      <Favs />
    );
    const el = element.getByText(/Mis compras/);
    expect(el).toBeInTheDocument();
  });
});
