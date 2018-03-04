// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser());

const groupManagement = require('./routes/group.js')(app);

const server = app.listen(process.env.PORT || 8081, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});
module.exports = app;
