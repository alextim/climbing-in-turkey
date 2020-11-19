import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import GalleryItem from "components/GalleryItem";
import PageSection from "components/PageSection";
import "./Gallery.scss";

const Gallery = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, gallery } = frontmatter;

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {gallery.map(
          ({ content, extraInfo, header, imageFileName, imageFileNameDetail, subheader }) => (
            <GalleryItem
              key={header}
              imageFileName={imageFileName}
              header={header}
              subheader={subheader}
              content={content}
              imageFileNameDetail={imageFileNameDetail}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row>
    </PageSection>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Gallery.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Gallery;
