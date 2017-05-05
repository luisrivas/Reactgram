import React from 'react';

const FileUpload = (props) => {
    return (
      <div>
        <progress value={this.props.uploadValue} max='100'>
          {this.props.uploadValue} %
        </progress>
        <br/>
        <input type="file" onChange={this.props.onUpload} />
      </div>
    )
}

export default FileUpload;