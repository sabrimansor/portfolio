import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Logo from "@components/logo";
import { ImageType } from "@utils/types";

const Footer = ({ className, data }) => {
    return (
        <div className={cn("rn-footer-area rn-section-gap", className)}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-area text-center">
                            <p className="description mt--30">
                                &copy; {new Date().getFullYear()} &nbsp;
                                {data?.copyright_text && (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.copyright_text,
                                        }}
                                    />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        copyright_text: PropTypes.string,
    }),
};

export default Footer;
