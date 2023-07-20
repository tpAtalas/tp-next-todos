import { render } from '@testing-library/react';
import { DivContainer } from '..';
import { PropsDivContainer } from '../../container.types';
import { screen } from '@testing-library/react';

describe('DivContainer', () => {
  const renderWithDivContainer = ({ className, children }: PropsDivContainer) =>
    render(<DivContainer className={className}>{children}</DivContainer>);

  it('should render the children elements and className', () => {
    const { container } = renderWithDivContainer({
      className: 'bg-red-400',
      children: <div>divContainer-test</div>,
    });
    const childElement = screen.getByText('divContainer-test');
    const divContainerTestId = screen.getByTestId('divContainer-testid');

    expect(container).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
    expect(divContainerTestId).toHaveClass('bg-red-400');
  });
});
