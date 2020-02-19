import { h, render } from 'preact';
import { Article, Feed, LoadingArticle } from '../articles';

export const renderFeed = () => {
  const feedContainer = document.getElementById('homepage-feed');

  render(
    <Feed
      renderFeedItems={(feedItems = []) => {
        if (feedItems.length === 0) {
          return <LoadingArticle />;
        }

        return (
          <div>
            {feedItems.map(feedItem => (
              <Article article={feedItem} />
            ))}
          </div>
        );
      }}
    />,
    feedContainer,
    feedContainer.firstElementChild,
  );
};

renderFeed();
