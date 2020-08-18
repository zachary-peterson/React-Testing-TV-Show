import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow');
// console.log(mockFetchShow);

const episodesData = {
    data: [{
        id: 553946,
        url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        name: "Chapter One: The Vanishing of Will Byers",
        season: 1,
        number: 1,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
            },
        summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        _links: {
            self: {
                href: "http://api.tvmaze.com/episodes/553946"
                }
            }
    },
    {
        id: 578663,
        url: "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        name: "Chapter Two: The Weirdo on Maple Street",
        season: 1,
        number: 2,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
            },
        summary: "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        _links: {
            self: {
                href: "http://api.tvmaze.com/episodes/578663"
                }
            }
    },
    {
        id: 578664,
        url: "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
        name: "Chapter Three: Holly, Jolly",
        season: 1,
        number: 3,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
            },
        summary: "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
        _links: {
            self: {
                href: "http://api.tvmaze.com/episodes/578664"
                }
            }
        },
    ]
};

test('App can render the Episodes components ater the API call has finished', async () => {
    mockFetchShow.mockResolvedValue(episodesData);

    // const { rerender } = await render(<App />);

    render(<App />)

    // const title = screen.findAllByRole('heading', /stranger things/i)

    // const seasonSelect = screen.findByTestId(/dropdown/i);
    // const selectSeason = screen.findByDisplayValue(/season one/i);

    // userEvent.click(screen.getByText('Select a season'))    
    // userEvent.click(screen.findByTestId(/dropdown/i))    

    // expect(getByTestId('dropdown')).toHaveFormValues({ season: '' })
    const ariaAttempt = screen.findByRole('generic', /select a season/i);
    const ariaSelect = screen.findByRole('option', /season 1/i);

    // await userEvent.selectOptions(ariaAttempt);

    // expect(screen.findByRole('option', /season 1/i).selected).toBe(true)

})