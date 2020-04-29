import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';

const Notification = (text, type) => {
  let noty = new Noty({
    text,
    type,
    timeout: 2500,
    progressBar: true,
  });

  return noty.show();
};

export { Notification };
