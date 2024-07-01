import dayjs from 'dayjs';
import { Cell, Grid, Paragraph, Row, DatePicker } from '@components';

export default {
    title: 'DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>DatePicker provided by Ant Design UI library.</Paragraph>
            </Cell>
            <Cell>
                <DatePicker type='date' format='DD-MM-YYYY' />
                <br />
                <DatePicker type='date' picker='week' />
                <br />
                <DatePicker type='date' picker='month' />
                <br />
                <DatePicker type='date' picker='year' />
                <br />
            </Cell>
        </Row>
    </Grid>
);

export const RangePicker = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>RangePicker provided by Ant Design UI library.</Paragraph>
            </Cell>
            <Cell>
                <DatePicker type='range' format='DD-MM-YYYY' />
                <br />
                <DatePicker type='range' picker='week' />
                <br />
                <DatePicker type='range' picker='month' />
                <br />
                <DatePicker type='range' picker='year' />
                <br />
            </Cell>
        </Row>
    </Grid>
);

export const DateTimePicker = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    This property provide an additional time selection. When showTime is an Object, its properties will be passed on to built-in TimePicker. Remember to set a
                    &quot;format&quot; value that includes the time values (like &quot;DD/MM/YYYY HH:mm:ss&quot;)
                </Paragraph>
            </Cell>
            <Cell>
                <DatePicker type='date' showTime format='DD/MM/YYYY HH:mm:ss' />
                <br />
                <DatePicker type='range' showTime format='DD/MM/YYYY HH:mm:ss' />
                <br />
            </Cell>
        </Row>
    </Grid>
);

export const PickerPresets = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>We can set preset ranges to RangePicker to improve user experience.</Paragraph>
            </Cell>
            <Cell>
                <DatePicker
                    type='range'
                    showTime
                    presets={[
                        {
                            label: 'Today',
                            value: [dayjs().startOf('day'), dayjs().endOf('day')],
                        },
                        {
                            label: 'This Month',
                            value: [dayjs().startOf('month'), dayjs().endOf('month')],
                        },
                    ]}
                />
                <br />
            </Cell>
        </Row>
    </Grid>
);

export const LanguageDatePicker = () => (
    <Grid fluid>
        <Row>
            <Paragraph margin='1rem 0 1rem 0'>
                In this section we include the string values for the languages available for Date Picker component through property <strong>language</strong> and the value that
                expects regarding the location of that language. When there&apos;s no value specified, it will have by default : <strong>`en`</strong> for English from{' '}
                <strong>Great Britain (en_GB)</strong>
            </Paragraph>
            <ul>
                <li>
                    <strong>`bg`</strong> for <strong>Bulgarian from Bulgaria (bg_BG)</strong>
                </li>
                <li>
                    <strong>`br`</strong> for <strong>Portuguese from Brazil (pt_BR)</strong>
                </li>
                <li>
                    <strong>`be`</strong> for <strong>Dutch from Belgium (nl_BE)</strong>
                </li>
                <li>
                    <strong>`ca`</strong> for <strong>Catalan from Spain (ca_ES)</strong>
                </li>
                <li>
                    <strong>`da`</strong> for <strong>Danish from Denmark (da_DK)</strong>
                </li>
                <li>
                    <strong>`de`</strong> for <strong>German from Germany (da_DE)</strong>
                </li>
                <li>
                    <strong>`el`</strong> for <strong>Greek from Greece (el_GR)</strong>
                </li>
                <li>
                    <strong>`es`</strong> for <strong>Spanish from Spain (es_ES)</strong>
                </li>
                <li>
                    <strong>`fi`</strong> for <strong>Finnish from Finland (fi_FI)</strong>
                </li>
                <li>
                    <strong>`fr`</strong> for <strong>French from France (fr_FR)</strong>
                </li>
                <li>
                    <strong>`it`</strong> for <strong>Italian from Italy (it_IT)</strong>
                </li>
                <li>
                    <strong>`nl`</strong> for <strong>Dutch from Netherlands (nl_NL)</strong>
                </li>
                <li>
                    <strong>`pl`</strong> for <strong>Polish from Poland (pl_PL)</strong>
                </li>
                <li>
                    <strong>`pt`</strong> for <strong>Portuguese from Portugal (pt_PT)</strong>
                </li>
                <li>
                    <strong>`sl`</strong> for <strong>Slovenian from Slovenia (sl_SI)</strong>
                </li>
                <li>
                    <strong>`sv`</strong> for <strong>Swedish from Sweden (sv_SE)</strong>
                </li>
                <li>
                    <strong>`tr`</strong> for <strong>Turkish from Turkey (tr_TR)</strong>
                </li>
                <li>
                    <strong>`us`</strong> for <strong>English from United States (en_US)</strong>
                </li>
                <li>
                    <strong>`zh`</strong> for <strong>Simplified Chinese from China (zh_CN)</strong>
                </li>
            </ul>
            <Paragraph margin='1rem 0 1rem 0'>
                In the case there is a language not supported on the previous list, you may include through property <strong>locale</strong> to add it from Ant Design:
                <br />
                <br />
                <code>
                    import fr_BE from &apos;antd/lib/locale/fr_BE&apos;;
                    <br />
                    &lt;DatePicker locale=&#123;fr_BE&#125;/&gt;
                </code>
            </Paragraph>
        </Row>
    </Grid>
);
