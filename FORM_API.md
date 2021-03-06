<a name="module_WVUSForm"></a>

## WVUSForm

* [WVUSForm](#module_WVUSForm)
    * [WVUSForm(WrapperForm)](#exp_module_WVUSForm--WVUSForm) ⇒ <code>Object</code> ⏏
        * [.getFieldState(fieldName)](#module_WVUSForm--WVUSForm+getFieldState) ⇒ <code>object</code>
        * [.getFormState()](#module_WVUSForm--WVUSForm+getFormState) ⇒ <code>object</code>
        * [.resetField(fieldName, fieldValue)](#module_WVUSForm--WVUSForm+resetField)
        * [.validateForm(forceSecondInteraction)](#module_WVUSForm--WVUSForm+validateForm) ⇒ <code>bool</code>
        * [.isFormValid()](#module_WVUSForm--WVUSForm+isFormValid) ⇒ <code>bool</code>
        * [.isFormEmpty()](#module_WVUSForm--WVUSForm+isFormEmpty) ⇒ <code>bool</code>
        * [.handleValueChange(e, callback)](#module_WVUSForm--WVUSForm+handleValueChange)
        * [.setValueChange(fieldName, fieldValue, callback)](#module_WVUSForm--WVUSForm+setValueChange)
        * [.handleBlur(e)](#module_WVUSForm--WVUSForm+handleBlur)
        * [.showUISuccess(fieldState)](#module_WVUSForm--WVUSForm+showUISuccess) ⇒ <code>bool</code>
        * [.showUIError(fieldState)](#module_WVUSForm--WVUSForm+showUIError) ⇒ <code>bool</code>

<a name="exp_module_WVUSForm--WVUSForm"></a>

### WVUSForm(WrapperForm) ⇒ <code>Object</code> ⏏
attaches functions to a custom form
and keeps track of form state and validity

**Kind**: Exported function  
**Returns**: <code>Object</code> - Component Wrapped react component  

| Param | Type | Description |
| --- | --- | --- |
| WrapperForm | <code>Object</code> | Custom form to be wrapped |

<a name="module_WVUSForm--WVUSForm+getFieldState"></a>

#### wvusForm.getFieldState(fieldName) ⇒ <code>object</code>
Gets field state for a field

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  
**Returns**: <code>object</code> - field state  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | field to get state for |

<a name="module_WVUSForm--WVUSForm+getFormState"></a>

#### wvusForm.getFormState() ⇒ <code>object</code>
Gets all form state

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  
**Returns**: <code>object</code> - form state  
<a name="module_WVUSForm--WVUSForm+resetField"></a>

#### wvusForm.resetField(fieldName, fieldValue)
Reset the field state to default for a field
Note: for Checkboxes and Radio controls,
you need to pass the original default value
(as default empty string is not valid for those field types)

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | field name to reset |
| fieldValue | <code>string</code> | value to reset field to (optional) |

<a name="module_WVUSForm--WVUSForm+validateForm"></a>

#### wvusForm.validateForm(forceSecondInteraction) ⇒ <code>bool</code>
Validates a form/subform
Note: Can be used to trigger validation of an entire form based
on some other interaction. By default will show all error messages, unless forceSecondInteraction is false.
This works for a subform because the Validation Helper's
validate method ignores form names unregistered in the config

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  
**Returns**: <code>bool</code> - validity of form  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| forceSecondInteraction | <code>bool</code> | <code>true</code> | force all fields to have secondInteraction of true, which makes all error messages show. (Defaults to true) |

<a name="module_WVUSForm--WVUSForm+isFormValid"></a>

#### wvusForm.isFormValid() ⇒ <code>bool</code>
Checks if form is valid

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  
**Returns**: <code>bool</code> - validity of entire form  
<a name="module_WVUSForm--WVUSForm+isFormEmpty"></a>

#### wvusForm.isFormEmpty() ⇒ <code>bool</code>
Checks if form is completely empty

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  
**Returns**: <code>bool</code> - validity of entire form  
<a name="module_WVUSForm--WVUSForm+handleValueChange"></a>

#### wvusForm.handleValueChange(e, callback)
Primary value change handler for onChange event
Does NOT update the secondInteraction value

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| e | <code>Object</code> |  | React event object |
| callback | <code>function</code> | <code></code> | function to be called after handler |

<a name="module_WVUSForm--WVUSForm+setValueChange"></a>

#### wvusForm.setValueChange(fieldName, fieldValue, callback)
Primary value setting handler, called by handleValueChange
Great for use with custom event handlers
Does NOT update the secondInteraction value

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fieldName | <code>string</code> |  | name of field to update |
| fieldValue | <code>string</code> |  | new value of field |
| callback | <code>string</code> | <code>null</code> | function to call after value update |

<a name="module_WVUSForm--WVUSForm+handleBlur"></a>

#### wvusForm.handleBlur(e)
Handles blur event on fields
Update the secondInteraction value to true,
since used with onBlur event

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Object</code> | React synthetic event object |

<a name="module_WVUSForm--WVUSForm+showUISuccess"></a>

#### wvusForm.showUISuccess(fieldState) ⇒ <code>bool</code>
Determines whether to show success ui states

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  
**Returns**: <code>bool</code> - whether to show success ui states to user  

| Param | Type | Description |
| --- | --- | --- |
| fieldState | <code>object</code> | field's state to check for success |

<a name="module_WVUSForm--WVUSForm+showUIError"></a>

#### wvusForm.showUIError(fieldState) ⇒ <code>bool</code>
Determines whether to show error ui states

**Kind**: instance method of [<code>WVUSForm</code>](#exp_module_WVUSForm--WVUSForm)  
**Returns**: <code>bool</code> - whether to show error ui states to user  

| Param | Type | Description |
| --- | --- | --- |
| fieldState | <code>object</code> | field's state to check for error |

